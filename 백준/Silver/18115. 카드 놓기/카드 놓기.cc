#include <iostream>
#include <deque>
#include <vector>

using namespace std;

int main() {
    int N;
    cin >> N;

    vector<int> commands(N);
    for (int i = 0; i < N; i++)
    {
        cin >> commands[i];
    }

    deque<int> deque;

    for (int i = 1; i <= N; i++)
    {
        int c = commands[N - i]; 

        if (c == 1)
        {
            deque.push_back(i);
        }
        else if (c == 2)
        {
            int last = deque.back();
        
            deque.pop_back();
            deque.push_back(i);
            deque.push_back(last);
        }
        else if (c == 3)
        {
            deque.push_front(i);
        }
    }

    while (!deque.empty()) {
        cout << deque.back() << " ";
        deque.pop_back();
    }

    return 0;
}
