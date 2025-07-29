---
title: "Kubernetes in Production: Best Practices from the Trenches"
date: 2024-01-10T09:15:00+05:30
draft: false
tags: ["Kubernetes", "DevOps", "Cloud Native", "Infrastructure"]
categories: ["DevOps", "Cloud"]
description: "Hard-learned lessons and best practices for running Kubernetes clusters in production environments"
---

After managing Kubernetes clusters in production for several years, I've encountered almost every possible way things can go wrong. Here are the key lessons I've learned that can help you avoid common pitfalls and build more reliable systems.

## Resource Management: The Foundation

### Always Set Resource Requests and Limits

One of the biggest mistakes I see is deploying workloads without proper resource constraints:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  template:
    spec:
      containers:
      - name: app
        image: my-app:latest
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
```

**Why this matters:**
- Prevents resource starvation
- Enables proper scheduling decisions
- Protects against memory leaks bringing down nodes

### Use Horizontal Pod Autoscaling (HPA)

Don't rely on manual scaling. Set up HPA for applications that can benefit from it:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: my-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: my-app
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

## Security: Defense in Depth

### Network Policies Are Not Optional

Implement network segmentation from day one:

```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-all-ingress
spec:
  podSelector: {}
  policyTypes:
  - Ingress
---
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend
```

### Use Pod Security Standards

Replace Pod Security Policies with the new Pod Security Standards:

```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: production
  labels:
    pod-security.kubernetes.io/enforce: restricted
    pod-security.kubernetes.io/audit: restricted
    pod-security.kubernetes.io/warn: restricted
```

## Monitoring and Observability

### The Three Pillars

1. **Metrics**: Use Prometheus for collecting metrics
2. **Logs**: Centralize with Fluentd/Fluent Bit + Elasticsearch
3. **Traces**: Implement distributed tracing with Jaeger or Zipkin

### Essential Alerts

Set up alerts for these critical conditions:

- Node resource utilization > 80%
- Pod restart loops
- PersistentVolume usage > 85%
- Certificate expiration warnings
- API server response time degradation

## High Availability Patterns

### Multi-Zone Deployments

Always spread your workloads across availability zones:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 6
  template:
    spec:
      affinity:
        podAntiAffinity:
          preferredDuringSchedulingIgnoredDuringExecution:
          - weight: 100
            podAffinityTerm:
              labelSelector:
                matchExpressions:
                - key: app
                  operator: In
                  values:
                  - my-app
              topologyKey: failure-domain.beta.kubernetes.io/zone
```

### Implement Graceful Shutdowns

Handle termination signals properly:

```python
import signal
import sys
import time

def signal_handler(signum, frame):
    print("Received shutdown signal, cleaning up...")
    # Perform cleanup operations
    cleanup_resources()
    sys.exit(0)

signal.signal(signal.SIGTERM, signal_handler)
signal.signal(signal.SIGINT, signal_handler)

# Your application logic here
while True:
    process_requests()
    time.sleep(1)
```

## Backup and Disaster Recovery

### Regular etcd Backups

Automate etcd backups and test restoration procedures:

```bash
#!/bin/bash
BACKUP_DIR="/backup/etcd/$(date +%Y%m%d_%H%M%S)"
mkdir -p $BACKUP_DIR

etcdctl snapshot save $BACKUP_DIR/snapshot.db \
  --endpoints=https://127.0.0.1:2379 \
  --cacert=/etc/kubernetes/pki/etcd/ca.crt \
  --cert=/etc/kubernetes/pki/etcd/server.crt \
  --key=/etc/kubernetes/pki/etcd/server.key
```

### Application-Level Backups

Don't forget about your application data:
- Use Velero for cluster-level backups
- Implement database backup strategies
- Test restoration procedures regularly

## Common Pitfalls to Avoid

1. **Not using namespaces**: Organize resources properly
2. **Ignoring resource quotas**: Prevent resource hogging
3. **Running as root**: Use security contexts
4. **Not testing failure scenarios**: Implement chaos engineering
5. **Upgrading without testing**: Always test in staging first

## Operational Excellence

### GitOps Workflow

Implement GitOps using tools like ArgoCD or Flux:
- All changes go through Git
- Automated deployments
- Easy rollbacks
- Full audit trail

### Regular Maintenance

- Keep nodes updated with security patches
- Regularly rotate certificates
- Review and clean up unused resources
- Monitor deprecation warnings

## Looking Ahead

The Kubernetes ecosystem continues to evolve rapidly. Some areas I'm particularly excited about:

- **Service Mesh**: Istio and Linkerd for advanced traffic management
- **Serverless on K8s**: Knative and OpenFaaS
- **AI/ML Workloads**: Kubeflow and similar platforms
- **Edge Computing**: K3s and microk8s for edge deployments

Running Kubernetes in production is challenging, but following these practices will help you build more reliable, secure, and maintainable systems. Remember: start simple, iterate, and always prioritize reliability over features.

---

*Have you encountered other Kubernetes challenges in production? I'd love to hear about your experiences and solutions!*
