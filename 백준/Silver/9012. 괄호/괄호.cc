#include <stdio.h>
#include <stack>
#include <cstring>

using namespace std;

bool solve()
{
  char text[51];
  stack<int> s;
  scanf("%s", text);
  int text_len = strlen(text);

  for (int j = 0; j < text_len; j++)
  {
    char curr = text[j];
    char start = '(';
    char end = ')';

    if (curr == start)
      s.emplace(0);
    if (curr == end)
    {
      if (s.empty())
        return false;

      s.pop();
    }
  }

  return s.empty();
}

int main()
{
  int T;
  scanf("%d", &T);

  while (T--)
  {
    if (solve())
      printf("YES\n");
    else
      printf("NO\n");
  }

  return 0;
}