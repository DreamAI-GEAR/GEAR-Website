---
title: "시작하기"
order: 2
---

이 문서는 GEAR Agent Framework를 처음 사용하는 분을 위한 가이드입니다.

## 설치

```bash
pip install gear-agent
```

## 첫 번째 에이전트 만들기

```python
from gear_agent import Agent, Tool

agent = Agent(
    name="my-agent",
    tools=[Tool.web_search, Tool.file_read],
)

result = agent.run("Python 3.12의 새로운 기능을 정리해줘")
print(result)
```

## 다음 단계

- [도구 시스템 이해하기](./tools.md)
- [커스텀 도구 만들기](./custom-tools.md)
