#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int N;
  cin >> N;
  vector<int> nums(N);

  for (int i = 0; i < N; i++)
    cin >> nums[i];

  vector<int> d_seq(N, 0);
  vector<int> i_seq(N, 0);

  for (int i = 0; i < N; i++)
  {
    d_seq[i] = 1;

    for (int j = 0; j < i; j++)
      if (nums[j] < nums[i] && d_seq[j] + 1 > d_seq[i])
        d_seq[i] = d_seq[j] + 1;
  }

  for (int i = N - 1; i >= 0; i--)
  {
    i_seq[i] = 1;
    for (int j = N - 1; j > i; j--)
      if (nums[j] < nums[i] && i_seq[j] + 1 > i_seq[i])
        i_seq[i] = i_seq[j] + 1;
  }

  int answer = 0;
  for (int i = 0; i < N; i++)
  {
    int length = d_seq[i] + i_seq[i] - 1;
    answer = max(answer, length);
  }

  cout << answer << endl;
  
  return 0;
}
