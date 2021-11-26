<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
     
    public function register(Request $request)
    {
        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required|string|min:6'
        ]);

        $user = User::create([
            'name' => $request->get('name'),
            'password' => bcrypt($request->get('password')),
            'email' =>$request->get('email')
        ]);
     
      return response()->json(['status' => 'success', 'token' =>  $user->createToken('tokens')->plainTextToken]);
    }
    
    public function login(Request $request)
    {
        $data = array();
        $attr = $request->validate([
            'email' => 'required|string|email|',
            'password' => 'required|string'
        ]);

        if (!\Auth::attempt($attr)) {
            return response()->json(['status' => 'error', 'message' =>  'Credentials not match'], 401);
        }
       
        $token = auth()->user()->createToken('API Token')->plainTextToken;
       if(isset($token)) {
            $data = auth()->user();
       }
       return response()->json(['status' => 'success', 'message' => 'login successfully.', 'token' =>  $token,'data' => $data]);
    }

    // this method signs out users by removing tokens
    public function logout()
    {
        \auth()->user()->tokens()->delete();
        
         return response()->json(['status' => 'success', 'message' => 'logout successfully.']);
    }

    public function yesme(Request $request){
        echo "api ramm";
    }
}
