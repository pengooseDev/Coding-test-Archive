#include <iostream>
#include <vector>

using namespace std;

int main()
{
  int f;
  cin >> f;

  vector<int> ms;
  int ml = 0;

  for (int i = 1; i <= f; i++)
  {
    vector<int> seq;
    seq.push_back(f);
    seq.push_back(i);

    int index = 2;
    while (true)
    {
      int next = seq[index - 2] - seq[index - 1];
      if (next < 0)
        break;

      seq.push_back(next);
      index++;
    }

    if (seq.size() > ml)
    {
      ml = seq.size();
      ms = seq;
    }
  }

  cout << ml << "\n";

  for (int i : ms)
    cout << i << " ";

  cout << endl;

  return 0;
}