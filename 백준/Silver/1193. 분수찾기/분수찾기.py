from sys import stdin
x = int(stdin.readline().rstrip())
n = 1

while x > n:
  x -= n
  n += 1

if n % 2 == 0:
  print(f'{x}/{n-x+1}')
else:
  print(f'{n-x+1}/{x}')