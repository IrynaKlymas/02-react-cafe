console.log("Задача 5. Union Type (файл task-5.ts)");

function logStatus(status: "loading" | "success" | "error"): void {
    if (status === "loading") {
        console.log("Loading...");
    } else if (status === "success") {
        console.log("Success!");
    } else if (status === "error") {
        console.log("Something went wrong");
    }
}

logStatus("loading");
logStatus("success");
logStatus("error");