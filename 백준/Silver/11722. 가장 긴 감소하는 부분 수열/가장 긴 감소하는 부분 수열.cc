#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int N;
  cin >> N;
  vector<int> nums(N);
  vector<int> seq;

  for (int i = 0; i < N; i++)
    cin >> nums[i];

  for (int i = 0; i < N; i++)
  {
    if (seq.empty() || seq.back() > nums[i])
      seq.push_back(nums[i]);
    else
      for (int j = 0; j < seq.size(); j++)
        if (seq[j] <= nums[i])
        {
          seq[j] = nums[i];

          break;
        }
  }

  cout << seq.size() << endl;
  return 0;
}
