// types ==================================================== //
type StatusLoading = "pending" | "success" | "error"

// main ===================================================== //
const useAsync = <T = any>(promise: () => Promise<T>) => {

    let status: StatusLoading = "pending";
    let promiseResult: T;
    let promiseError: null | Error = null;

    const suspender = new Promise((resolve, reject) => {

        promise()
            .then((data) => {
                promiseResult = data;
                status = "success";
                resolve("success");
            })
            .catch((error) => {
                if (error instanceof Error) {
                    promiseError = error;
                    status = "error";
                }
                reject(error);
            });

    });

    return () => {
        switch (status) {
            case "pending":
                throw suspender;
            case "success":
                return promiseResult;
            case "error":
                throw promiseError;
        }
    };

}

// exports ================================================= //
export default useAsync;