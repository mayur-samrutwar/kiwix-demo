testCases = int(input())
for _ in range(testCases):
    n, m, k = [int(i) for i in input().split()]
    print((n + k) ^ (n + m + k))
