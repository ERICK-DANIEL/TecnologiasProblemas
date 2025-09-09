namespace PolimorfismoDemo.Unidades
{
    public class Metro
    {
        public double Valor { get; set; }

        public Metro(double v) => Valor = v;

        // Conversión implícita de double → Metro
        public static implicit operator Metro(double d) => new Metro(d);

        // Conversión explícita de Metro → double
        public static explicit operator double(Metro m) => m.Valor;
    }
}
