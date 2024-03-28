namespace ProbableMathy.DTOS {
    public class AdditionResponse {
        public int A {get;set;}
        public int B {get;set;}
        public string Index {
            get{
                return $"{A:D3}{B:D3}";
            }
        }
    }
}