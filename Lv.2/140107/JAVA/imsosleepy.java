class Solution {
    public long solution(int k, int d) {       
        long answer = 0;
        int x = 0;
        int y = d;
        if(d % k != 0){
            y = d - d%k;
        }

        while(x<=d) {
            if(Math.pow(x,2) + Math.pow(y,2) <= Math.pow(d,2)) {
                answer = answer + y/k + 1;
                x = x + k;
            } else {
                y = y - k;
            }
        }

        return answer;
    }
}