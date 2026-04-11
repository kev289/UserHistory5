export function AddUserMetadata(_target: any, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        args[0] = {
            ...args[0],
            role: "user",
            createdAt: Date.now()
        };

        console.log(`[DECORATOR] Enriqueciendo datos para: ${_propertyKey}`);
        
        return originalMethod.apply(this, args);
    };
}