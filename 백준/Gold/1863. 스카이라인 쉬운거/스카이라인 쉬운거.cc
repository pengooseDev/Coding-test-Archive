#include <stdio.h>
#include <stack>
using namespace std;

int main()
{
  stack<int> s;
  int n, answer = 0;
  scanf("%d", &n);

  s.emplace(0);

  while (n--)
  {
    int x, y;
    scanf("%d %d", &x, &y);

    if (!s.empty() && s.top() < y) // top보다 큰 값이 들어오면 asnwer++ & stack 추가.
    {
      answer++;
      s.emplace(y);
      continue;
    }

    if (!s.empty() && s.top() == y)
    {
      continue;
    }

    if (!s.empty() && s.top() > y)
    {
      bool duplicated = false;
      while (!s.empty() && s.top() >= y)
      {
        if (s.top() == y)
        {
          duplicated = true;
        }
        s.pop();
      }

      if (!duplicated)
      {
        answer++;
      }

      s.emplace(y);
    }
  }

  printf("%d", answer);

  return 0;
}