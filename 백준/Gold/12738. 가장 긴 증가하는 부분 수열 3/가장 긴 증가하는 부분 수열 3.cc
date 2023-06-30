#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int binary_search(vector<int> &s, int v)
{
  int l = 0, r = s.size() - 1;

  while (l <= r)
  {
    int m = l + (r - l) / 2;

    if (s[m] < v)
      l = m + 1;
    else
      r = m - 1;
  }

  return l;
}

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);

  int N;
  cin >> N;
  vector<int> nums(N);
  vector<int> seq;

  for (int i = 0; i < N; i++)
    cin >> nums[i];

  for (int i = 0; i < N; i++)
  {
    if (seq.empty() || seq.back() < nums[i])
      seq.push_back(nums[i]);
    else
    {
      int idx = binary_search(seq, nums[i]);
      seq[idx] = nums[i];
    }
  }

  cout << seq.size() << endl;

  return 0;
}
