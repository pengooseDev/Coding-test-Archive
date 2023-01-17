class Solution {
    public int solution(int number, int limit, int power) {
        int answer = 0;
        for (int i=1; i<=number; i++){
            if (yaksucalc(i) > limit){
                answer += power;
            }
            else answer += yaksucalc(i);
        }
        return answer;
    }
    public static int yaksucalc(int a){
        int cnt = 0;
        for (int i=1;i<=Math.sqrt(a);i++){
            if (i==Math.sqrt(a)){cnt++;}
            else if (((float)a/i)%1==0) {cnt += 2;};
        }
        return cnt;
    }
}