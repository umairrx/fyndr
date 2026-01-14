export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Register your instrumentation here
    // await import("./instrumentation-node");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    // Register your edge instrumentation here
    // await import("./instrumentation-edge");
  }
}
