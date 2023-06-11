#include <iostream>
using namespace std;

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int N, K;
  cin >> N >> K;

  int answer = 0;
  for (int i = 2; i <= N; ++i)
    answer = (answer + K) % i;

  cout << answer + 1 << endl;

  return 0;
}