#include <stdio.h>
#include <stack>
#include <cstring>

using namespace std;

int main()
{
  stack<int> s;
  char T[50];
  scanf("%s", T);

  int T_length = strlen(T);
  for (int i = 0; i < T_length; i++)
  {
    if (!s.empty() && s.top() == '(' && T[i] == ')')
        s.pop();
    else
      s.emplace(T[i]);
  }

  printf("%d", s.size());

  return 0;
}