using ProbableMathy.DTOS;
using ProbableMathy.Infrastructure;
using Serilog;

var random = new Random();
var builder = WebApplication.CreateBuilder(args);
{
    builder.Host.UseSerilog((ctx, lc) => lc.ReadFrom.Configuration(ctx.Configuration));
    builder.Services.AddSpaStaticFiles(configure => configure.RootPath = "wwwroot");
}
var app = builder.Build();
{
    app.UseExceptionHandler("/api/error/500");
    app.UseStatusCodePagesWithReExecute("/api/error/{0}");

    app.UseDefaultFiles(new DefaultFilesOptions
    {
        DefaultFileNames = new List<string> { "index.html" }
    });

    const string cacheMaxAge = "720";
    app.UseStaticFiles(new StaticFileOptions
    {
        OnPrepareResponse = ctx =>
        {
            ctx.Context.Response.Headers.Append(
                "Cache-Control", $"public, max-age={cacheMaxAge}");
        }
    });
    app.UseSerilogRequestLogging();
    app.UseMiddleware<SessionTrackingMiddleware>();
    app.MapGet("/api", () => $"ProbableMathy{Environment.GetEnvironmentVariable("PM_VERSION")}");
    app.MapGet("/api/addition", () =>
    {
        var database = new Dictionary<int, int[]>();
        for (int i = 1; i < 11; i++)
        {
            database.Add(i, Enumerable.Range(0, 11).ToArray());
        }
        var flattenedValues = database.SelectMany(kv => kv.Value.Select(v => new AdditionResponse { A = kv.Key, B = v }));

        var shuffledValues = flattenedValues.OrderBy(x => random.Next());

        return shuffledValues.Take(10);
    });
    app.UseSpa(configuration => configuration.Options.DefaultPage = new Microsoft.AspNetCore.Http.PathString("/index.html"));
}
app.Run();
