"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";
import { useUploadThing } from "~/utils/uploadthing";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        const result = await $ut.startUpload(selectedFiles);

        console.log("uploaded files", result);
        // TODO: persist result in state maybe?
    };

    return {
        inputProps: {
            onChange,
            multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
    };
};

function LoadingSpinner() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25" />
            <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" className="spinner_ajPY" />
        </svg>
    )
}

export default function UploadButton() {
    const router = useRouter();

    const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
        onUploadBegin: () => {
            toast.info(<div className="flex items-center gap-2">
                {LoadingSpinner()}
                <span className="text-xs">Uploading...</span>
            </div>, {
                description: "This may take a while...",
                id: "upload-begin",
            });
        },
        onUploadError: (error: Error) => {
            toast.error(`Error uploading ${error.message}`);
        },
        onClientUploadComplete: () => {
            toast.dismiss("upload-begin");
            toast.success("Upload complete!");
            router.refresh();
        }
    });


    return (
        <div>
            <label
                htmlFor="upload-button"
                className={`cursor-pointer ${isUploading ? 'animate-pulse' : ''}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
            </label>
            <input type="file" id="upload-button" {...inputProps} className="sr-only" />

        </div>
    );
}

