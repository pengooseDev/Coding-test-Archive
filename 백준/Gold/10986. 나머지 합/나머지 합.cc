#include <iostream>
#include <vector>
using namespace std;

int main()
{
  int N, M;
  cin >> N >> M;

  vector<long long> arr(N + 1, 0);
  vector<long long> remain(M, 0);

  remain[0] = 1;

  for (int i = 1; i <= N; i++)
  {
    cin >> arr[i];
    arr[i] += arr[i - 1];
    remain[arr[i] % M]++;
  }

  long long answer = 0;

  for (int i = 0; i < M; i++)
    answer += (remain[i] * (remain[i] - 1)) / 2;

  cout << answer << endl;

  return 0;
}