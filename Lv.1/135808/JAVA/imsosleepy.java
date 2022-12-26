import java.util.Collections;
import java.util.PriorityQueue;

class Solution {
    public int solution(int k, int m, int[] score) {
        // 우선순위 큐를 역순정렬되도록 정의
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int answer = 0;
        // 우선순위 큐에 삽입
        for(int i=0;i<score.length;i++) {
            pq.add(score[i]);
        }
        // m보다 클 경우 이익 계산식 수행
        while(pq.size() >= m) {
            for(int i=0;i<m;i++) {
                // 마지막 삽입되는 값이 가장 작으니 m을 곱해서 이익을 계산
                if (i == m-1) {
                    answer += (pq.poll() * m);
                } else {
                    pq.poll();
                }
            }
        }
        return answer;
    }
}