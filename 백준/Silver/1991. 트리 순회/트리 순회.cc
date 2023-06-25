#include <iostream>
#include <vector>
using namespace std;

struct Node
{
  char left;
  char right;
};


void preorder(char node, vector<Node> &t)
{
  if (node == '.')
    return;
  
  cout << node;
  preorder(t[node - 'A'].left, t);
  preorder(t[node - 'A'].right, t);
}

void inorder(char node, vector<Node> &t)
{
  if (node == '.')
    return;
  
  inorder(t[node - 'A'].left, t);
  cout << node;
  inorder(t[node - 'A'].right, t);
}

void postorder(char node, vector<Node> &t)
{
  if (node == '.')
    return;
  
  postorder(t[node - 'A'].left, t);
  postorder(t[node - 'A'].right, t);
  cout << node;
}

int main() {
  int N;
  cin >> N;

  vector<Node> tree(27);
  for (int i = 0; i < N; i++) {
    char node, left, right;
    cin >> node >> left >> right;

    tree[node - 'A'].left = left;
    tree[node - 'A'].right = right;
  }

  preorder('A', tree);
  cout << "\n";

  inorder('A', tree);
  cout << "\n";

  postorder('A', tree);
  cout << "\n";

  return 0;
}