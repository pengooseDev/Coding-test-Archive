#include <iostream>
#include <stack>
#include <string>
#include <cstring>
using namespace std;

int main()
{
  int round = 0;
  while (true)
  {
    round++;
    string text;
    cin >> text;

    if (text[0] == '-')
      break;

    /* stack */
    stack<string> s;
    int answer = 0;

    for (int i = 0; i < text.length(); i++)
    {
      string curr;
      curr = text[i];
      if (curr == "}" && (!s.empty() && s.top() == "{"))
      {
        s.pop();
      }
      else if (curr == "{")
      {
        s.push(curr);
      }
      else
      {
        answer++;
        s.push("{");
      }
    }

    answer += s.size() / 2;
    cout << round << ". " << answer << "\n";
  }

  cout << endl;

  return 0;
}