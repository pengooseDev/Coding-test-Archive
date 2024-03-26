from sys import stdin
t = int(stdin.readline().rstrip())
for _ in range(t):
    r, s = stdin.readline().split()
    for i in s:
        print(i*int(r), end='')
    print()