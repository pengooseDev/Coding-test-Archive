#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int N;
  cin >> N;

  int sum = 0;
  vector<int> P(N);

  for (int i = 0; i < N; i++)
  {
    cin >> P[i];

    sum ^= P[i];
  }

  int answer = 0;

  for (int i = 0; i < N; i++)
    for (int j = 1; j <= P[i]; j++)
      sum ^ ((P[i] - j) ^ P[i]) ? 1 : answer++;

  cout << answer << endl;

  return 0;
}
