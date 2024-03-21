using System.Text;

namespace Admixer_Test
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = Encoding.UTF8;

            Console.WriteLine("Вкажіть колір їжаків де\n0. Red\n1. Green\n2. Blue");
            int desiredColor = int.Parse(Console.ReadLine());

            int[] population = { 8, 1, 9 };

            int meetings = ChangeColor(population, desiredColor);
            if (meetings == -1)
                Console.WriteLine("Неможливо змінити колір всім їжакам");
            else
                Console.WriteLine("Мінімальна кількість зустрічей: " + meetings);
        }
        static int ChangeColor(int[] population, int desiredColor)
        {
            bool allSameColor = true;

            foreach (int count in population)
            {
                if (count != 0 && count != population[desiredColor])
                {
                    allSameColor = false;
                    break;
                }
            }

            if (allSameColor)
                return 0;

            int meetings = 0;

            while (true)
            {
                bool changed = false;
                for (int i = 0; i < population.Length; i++)
                {
                    for (int j = i + 1; j < population.Length; j++)
                    {
                        if (population[i] != 0 && population[j] != 0 && i != j)
                        {
                            int thirdColor = 3 - i - j;
                            int minCount = Math.Min(population[i], population[j]); // Визначаємо кількість зустрічей
                            population[i] -= minCount;
                            population[j] -= minCount;
                            population[thirdColor] += minCount;
                            meetings += minCount;
                            changed = true;
                        }
                    }
                }

                if (population[desiredColor] == population[0] + population[1] + population[2])
                    break;

                if (!changed)
                    return -1;
            }

            return meetings;
        }
    }
}
