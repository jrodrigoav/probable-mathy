using Microsoft.Extensions.Primitives;

namespace ProbableMathy.Infrastructure
{
    public class SessionTrackingMiddleware
    {
        private readonly ILogger<SessionTrackingMiddleware> _logger;
        private readonly RequestDelegate _next;

        public SessionTrackingMiddleware(RequestDelegate next, ILogger<SessionTrackingMiddleware> logger)
        {
            _logger = logger;
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            if (context.Request.Headers.TryGetValue("sessionid", out StringValues sessionId))
            {

                _logger.LogInformation($"CUSTOMER{context.Connection.RemoteIpAddress?.ToString()}|{sessionId.ToString()}");
            }

            // Use the sessionId for session tracking

            await _next(context);
        }
    }

}
