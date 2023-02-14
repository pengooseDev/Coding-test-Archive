class Solution {
    public int solution(int[] common) {
        int answer = 0;
        int d1 = common[1] - common[0];
        int d2 = common[2] - common[1];
        if(d1 == d2) {
            answer = common[common.length-1] + d1;
        } else {
            int dx = d2/d1;
            answer = common[common.length-1] * dx;
        }

        return answer;
    }
}