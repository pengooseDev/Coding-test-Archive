#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
using namespace std;

bool cmp(string a, string b)
{
  return a + b > b + a;
}

int main()
{
  int N;
  cin >> N;

  vector<string> v(N);

  for (int i = 0; i < N; i++)
    cin >> v[i];

  sort(v.begin(), v.end(), cmp);

  if (v[0] == "0")
    cout << '0' << "\n";
  else
  {
    for (int i = 0; i < v.size(); i++)
      cout << v[i];
    cout << "\n";
  }
  return 0;
}