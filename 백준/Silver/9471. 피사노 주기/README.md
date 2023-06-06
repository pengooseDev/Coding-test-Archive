# [Silver IV] 피사노 주기 - 9471 

[문제 링크](https://www.acmicpc.net/problem/9471) 

### 성능 요약

메모리: 10604 KB, 시간: 204 ms

### 분류

수학, 정수론

### 문제 설명

<p>1960년, IBM의 직원 Donald Wall은 피보나치 수열을 m으로 나눈 나머지가 주기를 이룬다는 것을 증명했다.</p>

<p>예를 들어, 피보나치 수열의 처음 10개를 11로 나눈 예는 다음과 같다.</p>

<table class="table table-bordered" style="width:60%">
	<thead>
		<tr>
			<th>n</th>
			<th>1</th>
			<th>2</th>
			<th>3</th>
			<th>4</th>
			<th>5</th>
			<th>6</th>
			<th>7</th>
			<th>8</th>
			<th>9</th>
			<th>10</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>F(n)</th>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>5</td>
			<td>8</td>
			<td>13</td>
			<td>21</td>
			<td>34</td>
			<td>55</td>
		</tr>
		<tr>
			<th>F(n) mod 11</th>
			<td>1</td>
			<td>1</td>
			<td>2</td>
			<td>3</td>
			<td>5</td>
			<td>8</td>
			<td>2</td>
			<td>10</td>
			<td>1</td>
			<td>0</td>
		</tr>
	</tbody>
</table>

<p>나머지를 이용해서 만든 수열은 주기가 나타날 수 있다. k(m)을 반복하는 부분 수열의 길이라고 했을 때, k(11) = 10임을 알 수 있다.</p>

<p>Wall은 아래와 같은 여러 가지 성질도 증명했다.</p>

<ul>
	<li>m > 2인 경우에 k(m)은 짝수이다.</li>
	<li>임의의 짝수 정수 n > 2에 대해서, k(m) = n인 m이 항상 존재한다.</li>
	<li>k(m) ≤ m<sup>2</sup> - 1</li>
	<li>k(2<sup>n</sup>) = 3×2<sup>(n-1)</sup></li>
	<li>k(5<sup>n</sup>) = 4×5<sup>n</sup></li>
	<li>k(2×5<sup>n</sup>) = 6n</li>
	<li>n > 2라면, k(10<sup>n</sup>) = 15×10<sup>(n-1)</sup></li>
</ul>

<p>m이 주어졌을 때, k(m)을 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 테스트 케이스의 개수 P가 주어진다. 각 테스트 케이스는 N과 M으로 이루어져 있다. N은 테스트 케이스의 번호이고, M은 문제에서 설명한 m이다.</p>

### 출력 

 <p>각 테스트 케이스마다 테스트 케이스 번호를 출력하고 k(M)을 출력한다.</p>

