---
date: 2026-10-06
description: Translate with OpenAI, or any OpenAI-compatible endpoint such as Azure OpenAI, Groq, Mistral or Ollama.
---

# OpenAI

Translations that read naturally, steered by your own prompt.

[Create an API key](https://platform.openai.com/api-keys)

To use this provider, go to **Enupal Translate → Settings → Providers**:

*   Enable **OpenAI**
*   Add your API key
*   Pick a model
*   Save Settings

## Settings

**API key** — your OpenAI key, or a bearer token for a compatible endpoint. Accepts an environment variable such as `$OPENAI_KEY`.

**API base URL** — leave empty for the official OpenAI API. Set it to use any OpenAI-compatible provider, for example Azure OpenAI, Groq, Mistral or a local Ollama install.

**Model** — pick from the list, or choose **Custom** and enter a model identifier for a non-OpenAI provider.

**Temperature** — between 0 and 2. Lower is more literal and consistent, which is usually what you want for translation.

::: tip
GPT-5 models only accept their default temperature, so the setting is ignored for them.
:::

**Custom prompt** — optional. Supports `{source}`, `{target}` and `{count}`:

```
Translate {count} strings from {source} into {target}. This is marketing copy for a
furniture retailer, so keep it warm and concise.
```

The rules that keep the batch format intact are always appended automatically, so a custom prompt cannot break translation.

## Using a compatible endpoint

Any service that speaks the OpenAI chat completions API will work. Set **API base URL** to its endpoint, set **Model** to **Custom**, and enter the model name that service expects.

```
API base URL: https://api.groq.com/openai/v1
Model:        Custom
Custom model: llama-3.3-70b-versatile
```
