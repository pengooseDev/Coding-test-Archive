#include <iostream>
#include <vector>
using namespace std;

vector<int> di = {1, -1, 0, 0};
vector<int> dj = {0, 0, 1, -1};

int main()
{
  int N;
  cin >> N;
  
  vector<vector<char>> graph(N, vector<char>(N));

  for (int i = 0; i < N; i++)
    for (int j = 0; j < N; j++)
      cin >> graph[i][j];

  int vertical = 0, horizontal = 0;

  for (int i = 0; i < N; i++)
  {
    int count = 0;
    for (int j = 0; j < N; j++)
    {
      if (graph[i][j] == '.') count++;
      else
      {
        if (count >= 2) horizontal++;
        count = 0;
      }
    }
    if (count >= 2) horizontal++;
  }
  
  for (int i = 0; i < N; i++)
  {
    int count = 0;
    for (int j = 0; j < N; j++)
    {
      if (graph[j][i] == '.') count++;
      else
      {
        if (count >= 2) vertical++;
        count = 0;
      }
    }
    if (count >= 2) vertical++;
  }

  cout << horizontal << " " << vertical << endl;

  return 0;
}