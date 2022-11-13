// duz bucaqli ucbucaq
for (int i = 1; i <= 10; i++)
{
    for (int j = 1; j <= i; j++)
    {
        Console.Write("*");
    }
    Console.WriteLine();
}

// ucbucaq
for (int i = 1; i < 10; i++)
{
    for (int k = i; k < 10; k++)
    {
        Console.Write(" ");
    }

    for (int j = 1; j < i; j++)
    {
        Console.Write("*");
        Console.Write(" ");
    }
    Console.WriteLine(" ");
}