WebApplication app = DefaultDistribtWebApplication.Create(buider =>
{
    buider.Services.AddReverseProxy().LoadFromConfig(buider.Configuration.GetSection("ReverseProxy"));
});

app.MapReverseProxy();
//app.MapGet("/", () => "Hello World!");

DefaultDistribtWebApplication.Run(app);
