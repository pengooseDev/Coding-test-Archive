def f(a, n):
    arr = [0 for _ in range(n + 1)]
    for i in range(n + 1):
        arr[i] = a % 5
        a //= 5
    
    ans = 0
    is_zero = False
    for i in range(n, -1, -1):
        if is_zero: continue
        if arr[i] == 1: ans += 4 ** i * 1
        elif arr[i] == 2: 
            ans += 4 ** i * 2
            is_zero = True
        elif arr[i] == 3: 
            ans += 4 ** i * 2
        elif arr[i] == 4: ans += 4 ** i * 3
    return ans
        
def solution(n, l, r):
    a = f(l - 1, n)
    b = f(r, n)
    return b - a
