#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;

bool cmp(string a, string b)
{
  return a + b > b + a;
}

bool cmp_length(string a, string b)
{
  if (a.length() == b.length())
    return a > b;

  return a.length() > b.length();
}

int main()
{
  long long K, N;
  cin >> K >> N;

  vector<string> numbers(K);
  for (long long i = 0; i < K; i++)
    cin >> numbers[i];

  sort(numbers.begin(), numbers.end(), cmp_length);
  string longest = numbers[0];

  sort(numbers.begin(), numbers.end(), cmp);

  string answer = "";
  bool add_longest = false;
  for (long long i = 0; i < K; i++)
  {
    if ((numbers[i] == longest) && !add_longest)
    {
      add_longest = true;
      for (long long j = 0; j < N - K; j++)
        answer += longest;
    }

    answer += numbers[i];
  }

  cout << answer << endl;

  return 0;
}
