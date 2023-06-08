#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main()
{
  string input;
  cin >> input;

  stack<char> s;
  int answer = 0;

  for (int i = 0; i < input.length(); i++)
  {
    char curr = input[i];
    if (curr == '(')
      s.push('(');
    else
    {
      s.pop();
      if (input[i - 1] == '(')
      {
        answer += s.size();
      }
      else
      {
        answer += 1;
      }
    }
  }

  cout << answer << endl;

  return 0;
}

/*
## (인 경우 그냥 push


## )인 경우
pop하고


1. 레이저 top == '(' &&  (!s.empty() && s.top() == ')');
answer += s.size()

2. 막대 끝
사라지는 막대 끝 += 1;



*/