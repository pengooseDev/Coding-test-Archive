import java.util.*;
import java.util.stream.Collectors;
class Solution {
    public int solution(int k, int[] tangerine) {
        int answer = 0;
                HashMap<Integer, Integer> mandarinMap = new HashMap<>();

        for(int i =0;i<tangerine.length;i++) {
            if(mandarinMap.containsKey(tangerine[i])) {
                mandarinMap.put(tangerine[i], mandarinMap.get(tangerine[i])+1);
            } else {
                mandarinMap.put(tangerine[i],1);
            }

        }

        Map<Integer,Integer> sortedMap = mandarinMap.entrySet()
                .stream().sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1 , LinkedHashMap::new));

        int sumMandarin = 0;
        
        for ( Integer key : sortedMap.keySet() ) {
            sumMandarin = sumMandarin + sortedMap.get(key);
            answer++;
            if(sumMandarin >= k) break;
        }
        return answer;
    }
}