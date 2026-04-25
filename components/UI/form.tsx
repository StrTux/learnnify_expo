import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Animated,
    Alert,
    TextInputProps
} from 'react-native';

// ==================== LABEL ====================
export const Label = ({ children }: { children: React.ReactNode }) => {
    return (
        <Text className="text-sm font-medium mb-2 text-gray-800 dark:text-gray-200">
            {children}
        </Text>
    );
};

// ==================== INPUT ====================
interface InputProps extends TextInputProps {
    className?: string;
    error?: boolean;
}

export const Input = React.forwardRef<TextInput, InputProps>(
    ({ className = '', error = false, ...props }, ref) => {
        const [isFocused, setIsFocused] = useState(false);
        const glowAnim = useRef(new Animated.Value(0)).current;

        useEffect(() => {
            Animated.timing(glowAnim, {
                toValue: isFocused ? 1 : 0,
                duration: 200,
                useNativeDriver: false,
            }).start();
        }, [isFocused]);

        const borderColor = error
            ? '#ef4444' // red-500
            : glowAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#d1d5db', '#3b82f6'], // gray-300 to blue-500
            });

        return (
            <Animated.View
                style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor,
                    paddingHorizontal: 2,
                }}
                className="bg-white dark:bg-gray-800"
            >
                <TextInput
                    ref={ref}
                    className={`h-12 px-4 text-gray-900 dark:text-gray-100 ${className}`}
                    placeholderTextColor="#9ca3af" // gray-400
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </Animated.View>
        );
    });

// ==================== LOGIN ====================
export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, setErrors] = useState<{ email?: boolean; password?: boolean }>({});

    const handleLogin = () => {
        const newErrors: { email?: boolean; password?: boolean } = {};

        // Inline validation
        if (!email || !email.includes('@')) newErrors.email = true;
        if (!password || password.length < 6) newErrors.password = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            Alert.alert('Error', 'Please enter valid credentials');
            return;
        }

        Alert.alert('Success', 'Login Successful');
    };

    return (
        <View className="px-2">
            <View className="mb-4">
                <Text className="text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</Text>
            </View>

            <View className="gap-4">
                <View>
                    <Label>Email</Label>
                    <Input
                        error={errors.email}
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View>
                    <Label>Password</Label>
                    <Input
                        error={errors.password}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity
                    className="h-12 rounded-md items-center justify-center bg-black/90"
                    onPress={handleLogin}
                >
                    <Text className="text-white font-thin">
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// ==================== SIGNUP ====================
export const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, boolean>>>({});

    const handleSignup = () => {
        const newErrors: Partial<Record<keyof typeof formData, boolean>> = {};

        if (!formData.firstName || formData.firstName.length < 2) newErrors.firstName = true;
        if (!formData.lastName || formData.lastName.length < 2) newErrors.lastName = true;
        if (!formData.username || formData.username.length < 3) newErrors.username = true;
        if (!formData.email || !formData.email.includes('@')) newErrors.email = true;
        if (!formData.password || formData.password.length < 6) newErrors.password = true;

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            Alert.alert('Error', 'Fix all fields');
            return;
        }

        Alert.alert('Success', 'Account Created');
    };

    const update = (key: keyof typeof formData, value: string) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <View className="px-4">
            <View className="gap-4">
                <View className="flex-row gap-4">
                    <View className="flex-1">
                        <Label>First Name</Label>
                        <Input
                            error={errors.firstName}
                            value={formData.firstName}
                            onChangeText={(t) => update('firstName', t)}
                        />
                    </View>

                    <View className="flex-1">
                        <Label>Last Name</Label>
                        <Input
                            error={errors.lastName}
                            value={formData.lastName}
                            onChangeText={(t) => update('lastName', t)}
                        />
                    </View>
                </View>

                <View>
                    <Label>Username</Label>
                    <Input
                        error={errors.username}
                        value={formData.username}
                        onChangeText={(t) => update('username', t)}
                        autoCapitalize="none"
                    />
                </View>

                <View>
                    <Label>Email</Label>
                    <Input
                        error={errors.email}
                        value={formData.email}
                        onChangeText={(t) => update('email', t)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View>
                    <Label>Password</Label>
                    <Input
                        error={errors.password}
                        value={formData.password}
                        onChangeText={(t) => update('password', t)}
                        secureTextEntry
                    />
                </View>

                <TouchableOpacity
                    className="h-12 rounded-md items-center justify-center bg-black/90"
                    onPress={handleSignup}
                >
                    <Text className="text-white font-thin">
                        Create Account
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// ==================== MAIN ====================
interface FormProps {
    tab?: string;
}

export const FormDemo = ({ tab = 'login' }: FormProps) => {
    return tab === 'login' ? <LoginForm /> : <SignupForm />;
};

export default FormDemo;