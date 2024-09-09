import React from 'react';

export function Loading() {
    return (
        <div className="mx-auto flex size-96 items-center justify-center">
            <div className="border-primary size-32 animate-spin rounded-full border-b-2" />
        </div>
    );
}
