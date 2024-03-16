# [Gold I] 수열과 쿼리 17 - 14438 

[문제 링크](https://www.acmicpc.net/problem/14438) 

### 성능 요약

메모리: 68124 KB, 시간: 560 ms

### 분류

세그먼트 트리, 자료 구조

### 제출 일자

2024년 3월 16일 15:13:35

### 문제 설명

<p>길이가 N인 수열 A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>N</sub>이 주어진다. 이때, 다음 쿼리를 수행하는 프로그램을 작성하시오.</p>

<ul>
	<li><code>1 i v</code> : A<sub>i</sub>를 v로 바꾼다. (1 ≤ i ≤ N, 1 ≤ v ≤ 10<sup>9</sup>)</li>
	<li><code>2 i j</code> : A<sub>i</sub>, A<sub>i+1</sub>, ..., A<sub>j</sub>에서 크기가 가장 작은 값을 출력한다. (1 ≤ i ≤ j ≤ N)</li>
</ul>

<p>수열의 인덱스는 1부터 시작한다.</p>

### 입력 

 <p>첫째 줄에 수열의 크기 N이 주어진다. (1 ≤ N ≤ 100,000)</p>

<p>둘째 줄에는 A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>N</sub>이 주어진다. (1 ≤ A<sub>i</sub> ≤ 10<sup>9</sup>)</p>

<p>셋째 줄에는 쿼리의 개수 M이 주어진다. (1 ≤ M ≤ 100,000)</p>

<p>넷째 줄부터 M개의 줄에는 쿼리가 주어진다.</p>

### 출력 

 <p>2번 쿼리에 대해서 정답을 한 줄에 하나씩 순서대로 출력한다.<span style="display: none;"> </span></p>

