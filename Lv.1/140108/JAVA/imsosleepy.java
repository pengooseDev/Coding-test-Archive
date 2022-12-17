class Solution {
    public int solution(String s) {
        int answer = 1;
        char firstString = s.charAt(0);
        int same = 1;
        int notSame = 0;
        for(int i=1;i<s.length();i++) {
            // 두 단어가 같다.
            if(firstString == s.charAt(i)) {
                same++;
                continue;
            }
            // 두 단어가 다르다.
            if(firstString != s.charAt(i)) {
                notSame++;
                // 선택된 숫자와 다른 숫자의 갯수가 같아졌다.
                if(same == notSame) {
                    i = i+1;
                    if( i == s.length()) break;
                    same = 1;
                    notSame = 0;
                    answer++;
                    firstString = s.charAt(i);
                }
            }

        }
        return answer;
    }
}