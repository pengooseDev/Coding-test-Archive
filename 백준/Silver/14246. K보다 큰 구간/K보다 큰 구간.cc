#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int N;
  cin >> N;

  vector<long long> arr(N + 1, 0);
  for (int i = 1; i <= N; i++)
  {
    cin >> arr[i];
    arr[i] += arr[i - 1];
  }

  long long k;
  cin >> k;

  long long answer = 0;
  for (int i = 1; i <= N; i++)
  {
    auto l = lower_bound(arr.begin() + i, arr.end(), arr[i - 1] + k + 1);
    answer += (arr.end() - l);
  }

  cout << answer << "\n";

  return 0;
}
