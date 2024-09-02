class Solution {
    public boolean isPerfectSquare(int num) {
        long f = 0;
        long l = num;
        while(f <= l) {
            long mid = (f+l)/2;
            if(mid*mid == num)
                return true;
            else if(num > mid*mid)
                f=mid+1;
            else if(num < mid*mid)
                l=mid-1;
        }
        return false;
    }
}