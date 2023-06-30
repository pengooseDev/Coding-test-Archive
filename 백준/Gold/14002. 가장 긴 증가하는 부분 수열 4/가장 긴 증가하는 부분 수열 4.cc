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
  vector<int> parent(N, -1);
  vector<int> seq_i;

  for (int i = 0; i < N; i++)
    cin >> nums[i];

  for (int i = 0; i < N; i++)
  {
    if (seq.empty() || seq.back() < nums[i])
    {
      parent[i] = (seq_i.empty() ? -1 : seq_i.back());
      seq_i.push_back(i);
      seq.push_back(nums[i]);
    }
    else
    {
      int idx = binary_search(seq, nums[i]);
      seq[idx] = nums[i];
      seq_i[idx] = i;
      parent[i] = (idx > 0 ? seq_i[idx - 1] : -1);
    }
  }

  cout << seq.size() << '\n';

  vector<int> answer;
  int p = seq_i.back();
  while (p != -1)
  {
    answer.push_back(nums[p]);
    p = parent[p];
  }

  for (int i = answer.size() - 1; i >= 0; i--)
    cout << answer[i] << ' ';

  return 0;
}
