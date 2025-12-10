---
title: "ChatGPT Prompt Engineering for Developers: Course Notes"
date: 2023-04-28T10:30:00+05:30
draft: false
tags: ["Prompt Engineering", "LLMs", "AI"]
categories: ["Notes"]
description: "Distilled takeaways from DeepLearning.AI's ChatGPT Prompt Engineering for Developers course."
---

Course link: [ChatGPT Prompt Engineering for Developers - DeepLearning.AI](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/).

## Resources mentioned in the course
- https://github.com/openai/openai-cookbook
- https://writingprompts.com/bad-grammar-examples/
- https://pypi.org/project/redlines/

## Meta
- The course uses OpenAI's ChatGPT `gpt-3.5-turbo` model and the [chat completion endpoint](https://platform.openai.com/docs/guides/chat).
- OpenAI python package: https://pypi.org/project/openai/

## Chapter 1: Introduction
- Two types of Large Language Models (LLMs):
  1. **Base LLM**
  2. **Instruction-tuned LLM**
     - Start with a base LLM trained on large internet text; fine-tune with input/output instructions and RLHF to be helpful, honest, and harmless.
     - Most instructions online target base LLMs; for practical apps, use instruction-tuned services (safer, more aligned).
- > 💡 Think of talking to a smart person without context. If outputs miss the mark, the instructions/context were unclear. Be explicit.

## Chapter 2: Guidelines for prompting
- Experiment with prompt variations to see how outputs change.

### 2 key principles for writing prompts
1) **Write clear and specific instructions**
   - Give context and details; clarity can mean longer prompts.
   - Use delimiters (`` ` `` backticks, quotes, angle brackets) to separate input text from instructions and avoid prompt injection.
     - Prompt injection: malicious text embedded in the prompt can override your instructions and redirect the model.
   - Ask for structured output (HTML, markdown, JSON, etc.).
   - Ask the model to check assumptions/conditions first; stop if they are not met. Spell out edge cases to handle.
   - Provide few-shot examples of successful completions, then ask for the target output.

2) **Give the model time to think**
   - Specify steps required to complete a task; request a reasoning chain before the final answer.
   - Let the model work out its own solution instead of rushing to a conclusion to reduce errors and bias.

### Model limitations
- Hallucination: confident statements that are not grounded in data.
- Why it matters: hallucinations can be inaccurate or misleading; a known limitation.
- Reduce them by asking the model to extract/quote relevant info from provided text and reference the source.

## Chapter 3: Iterative Prompt Development
- First prompts seldom land perfectly.
- Prompting is iterative: write, test, inspect what failed, add details/constraints, and retry.
- To improve: analyze the instruction prompt, then iterate with more detail.

## Chapter 4: Summarizing
- Summarize with a focus on a specific topic.
- You can constrain by sentence/word/character limits.
- Summarize by attribute (e.g., a customer review for shipping/delivery vs. pricing/value).
- Ask to extract only relevant info and ignore unrelated content.

## Chapter 5: Inferring
- Inferring = take text input and analyze it (labels, names, sentiment).
- Output can be verbose or a single word (e.g., Positive/Neutral/Negative).
- Infer mood (e.g., “Is the customer angry? Yes/No”).
- > 💡 LLMs often outperform classical ML models for sentiment analysis.
- One prompt can extract multiple fields at once:
  - sentiment
  - expressing anger (Yes/No)
  - item purchased
  - company that made the item
  - keywords/quotes
- Topic modeling:
  - Provide a list of topics and ask for the best fit, or
  - Ask the model to generate a 1–2 word topic itself.
- Present these results as JSON for downstream analysis.

## Chapter 6: Transforming
- **Translation:** detect language; translate to one or many languages.
- **Tone adjustment:** formal ↔ informal; rewrite slang into business language.
- **Proofreading:** fix spelling mistakes and grammar.
- **Format conversion:** output JSON, markdown, HTML, XML, etc.

## Chapter 7: Expanding
- Expand short text (instructions, topic lists, emails) into longer drafts; use LLM as a brainstorming partner.
- > ⚠️ LLMs can also generate spam—use responsibly.
- `temperature` controls randomness (0–1):
  - `0`: repeatable outputs.
  - `1`: different output each time.
  - Lower values = reliability; higher = creativity.
- > 🔱 Use lower temperature when you need reliable systems.

## Chapter 8: Chatbot
- Custom chatbots are a popular LLM use case; ChatGPT is a web UI over this pattern.
- `ChatCompletion` accepts a list of messages and returns an output.
- Role meanings in code:

```python
def get_completion_from_messages(messages, model="gpt-3.5-turbo", temperature=0):
    response = openai.ChatCompletion.create(
        model=model,
        messages=messages,
        temperature=temperature,  # degree of randomness
    )
    return response.choices[0].message["content"]
```

![Chat roles diagram](https://img.notionusercontent.com/s3/prod-files-secure%2F960c3a77-19fc-45c9-94ba-137b787d8e63%2Fbc3003db-4e11-4a2f-8768-4a889b460019%2FUntitled.png/size/w=1820?exp=1765430870&sig=iCvT70R9rjSAhrRT4Gm4HRByI4Thb6OW5GmxWC7-T0A&id=7f576f9f-b008-446e-803d-0ec128daac23&table=block)

- > 💡 Each conversation is standalone on the server; include prior context/messages each call if you need continuity.

## Chapter 9: Conclusion
- Build something small, learn, and apply it to the next project; momentum matters.
- > ✅ Use LLMs responsibly and for positive impact.
