#include <iostream>
#include <stack>
using namespace std;

int main()
{
  string input;
  cin >> input;

  stack<int> s;

  for (char i : input)
  {
    if (i == '(' || i == '[')
    {
      // 열린 괄호 분기처리
      s.push(i == '(' ? -2 : -3);
      continue;
    }

    // 닫힌 괄호 분기처리
    if (s.empty())
    {
      // 잘못된 괄호 예외처리
      cout << 0 << endl;
      return 0;
    }

    int temp = 0;
    bool matched = false;

    while (!s.empty())
    {
      int top = s.top();
      s.pop();

      if (top < 0)
      {
        if ((i == ')' && top == -2) || (i == ']' && top == -3))
        {
          temp = (temp == 0 ? 1 : temp);
          matched = true;

          break;
        }
        else
        {
          cout << 0 << endl;
          return 0;
        }
      }
      else
      {
        temp += top;
      }
    }

    if (temp == 0 || !matched)
    {
      cout << 0 << endl;
      return 0;
    }

    s.push(temp * (i == ')' ? 2 : 3));
  }

  int answer = 0;

  while (!s.empty())
  {
    int top = s.top();
    s.pop();

    if (top < 0)
    {
      cout << 0 << endl;
      return 0;
    }

    answer += top;
  }

  cout << answer << endl;

  return 0;
}
