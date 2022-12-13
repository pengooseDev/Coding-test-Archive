def solution(k, d):
    ans = 0
    m = d // k
    for i in range(m + 1):
        t2 = d ** 2 - (k * i) ** 2
        if t2 >= 0:
            ans += (t2 ** (1 / 2)) // k
            ans += 1
    return ans